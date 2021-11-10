const _getCurrencySymbols = (currency: string | undefined) => {
    switch (currency) {
      case 'USD':
        return '$';
      default:
        return '$';
    }
  };

  export {_getCurrencySymbols}