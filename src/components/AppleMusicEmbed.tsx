type AppleMusicEmbedProps = {
  url: string;
  title: string;
};
const AppleMusicEmbed = ({ url, title }: AppleMusicEmbedProps) => (
  <div className="videoWrapper">
    <iframe src={url} title={title} width="100%" allow="encrypted-media" />
  </div>
);

export default AppleMusicEmbed;
