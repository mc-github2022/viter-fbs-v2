import { useEffect } from "react";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import { useParams } from "react-router-dom";

const MetaInsights = ({ insightId }) => {
  const { slug } = useParams();

  const { data: insightData } = useQueryData(
    `/v1/insights/${insightId}`,
    "get",
    ["insights", insightId],
    {},
    null,
    true
  );

  // Get the matching post by slug
  const post =
    insightData?.data?.find(
      (item) =>
        item.home_insights_slug?.trim().toLowerCase() ===
        slug?.trim().toLowerCase()
    ) || null;

  useEffect(() => {
    const defaultTitle = "Frontline Business Solutions, Inc.";
    const defaultDescription =
      "Frontline Business Solutions is a company based in San Pablo City, Laguna, Philippines. Offers website design, web hosting, accounting.";
    const defaultImage = "https://frontlinebusiness.com.ph/default.jpg";
    const defaultUrl = "https://frontlinebusiness.com.ph/";

    // Decide what to set based on whether post exists
    const title = post?.home_insights_title || defaultTitle;
    const description =
      post?.home_insights_meta_description || defaultDescription;

    let eventImage = [];
    if (post?.home_insights_img) {
      eventImage = getConvertStringToJSONparseData(post.home_insights_img);
    }
    const eventImgId = eventImage.map((img) => img.id)[0];
    const ogImage = eventImgId
      ? `https://drive.google.com/uc?export=view&id=${eventImgId}`
      : defaultImage;

    const ogUrl = post
      ? `https://frontlinebusiness.com.ph/events/${post.home_insights_slug}?id=${insightId}`
      : defaultUrl;

    document.title = title;

    const setMeta = (property, content) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:image", ogImage);
    setMeta("og:image:secure_url", ogImage);
    setMeta("og:image:type", "image/jpeg");
    setMeta("og:image:width", "1080");
    setMeta("og:image:height", "630");
    setMeta("og:url", ogUrl);
    setMeta("og:type", "article");
  }, [post]);

  return null;
};

export default MetaInsights;
