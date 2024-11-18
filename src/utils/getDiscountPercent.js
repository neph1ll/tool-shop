
export const getDiscountPercent = (price, discontPrice) => {
    if (discontPrice === null) {
        return 0;
    }

    return Number((100 - (discontPrice/price * 100)).toFixed(2));
};

// export const getDiscountPercent = (price, discontPrice) => discontPrice === null ? 0 : Number((100 - (discontPrice/price * 100)).toFixed(2))
