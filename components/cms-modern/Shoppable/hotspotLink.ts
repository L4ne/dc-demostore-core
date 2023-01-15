import {
  ShoppableImageHotspot,
  ShoppableImagePolygon
} from "@Components/dc/molecules/shoppable/shoppableTypes";

export const hotspotLink = (
  hotspot: ShoppableImageHotspot | ShoppableImagePolygon
) => {
  const isExt = hotspot.target.indexOf("http") > -1;
  return `${isExt ? hotspot.target : `/${hotspot.target}`}`;
};
