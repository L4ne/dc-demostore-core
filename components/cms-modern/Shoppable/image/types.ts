export type AnnotationsProps = {
  imgProps: {
    w: number | null;
    h: number | null;
  };
  polygons: unknown[];
  hotspots: unknown[];
  polygonHide: boolean;
  hotspotHide: boolean;
};
