export const getSortField = (sortNameField: string) => {
    switch (sortNameField) {
      case "name":
        return {"name": "ASC"};
      case "price":
        return {"price": "ASC"};
      case "position":
        return {"position": "ASC"};
      case "relevance":
        return {"relevance": "ASC"};
      default:
        return {"relevance": "ASC"};
    }
  }