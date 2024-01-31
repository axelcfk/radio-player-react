import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Channels({ filteredChannels, isLoading }) {
  return (
    <div className="contain">
      {isLoading ? (
        <Skeleton count={10} width="800px" className="skeleton" />
      ) : (
        <div>
          {filteredChannels.map((data) => (
            <div
              className="channel-container"
              key={data.id}
              style={{ backgroundColor: "#" + data.color }}
            >
              <div className="img-div">
                <img src={data.image} alt="channelImg" className="img" />
              </div>

              <div className="content">
                <h1 className="title">{data.name} </h1>
                <audio controls className="controls">
                  <source src={data.liveaudio.url} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
