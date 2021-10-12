export const product_tag_content = (tag: number) => {
    switch (tag) {
      case 315:
        return "New";
      case 316:
        return "Featured";
      case 317:
        return "Limited Edition";
      default:
        return;
    }
  };