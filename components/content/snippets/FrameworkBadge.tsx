import JsBadge from "components/svg/JsBadge";
import ReactBadge from "components/svg/ReactBadge";
import SvelteBadge from "components/svg/SvelteBadge";

const FrameworkBadge = ({ lang = "React" }) => {
  if (lang === "Javascript") return <JsBadge />;
  else if (lang === "Svelte") return <SvelteBadge />;
  else return <ReactBadge />;
};

export default FrameworkBadge;
