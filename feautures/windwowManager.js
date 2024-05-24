let isOpen = false;

export const isWindowOpen = () => {
    return isOpen;
}

export const openWindow = () => {
    isOpen = true;
};

export const closeWindow = () => {
    isOpen = false;
};