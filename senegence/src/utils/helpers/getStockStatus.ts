export const _handleStockStatus = (status: string) => {
    switch (status) {
      case 'IN_STOCK':
        return 'VIEW PRODUCT';
      case 'OUT_OF_STOCK':
        return 'OUT OF STOCK';
      default:
        return 'VIEW PRODUCT';
    }
  };
