import Cookies from "js-cookie";

export const getUserIdFromToken = () => {
    const token = Cookies.get("accessToken");
    if (!token) return null;
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const decoded = JSON.parse(jsonPayload);
        return decoded.sub; // The user_id is in the 'sub' claim
    } catch (e) {
        console.error("Error decoding token:", e);
        return null;
    }
};
