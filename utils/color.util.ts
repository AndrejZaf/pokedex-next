export function determinePokemonColor(color: string) {
    switch (color) {
        case "red":
            return {
                background: "#fb6c6c",
                badge: "#fc9c9c",
                badgeTextColor: "#FFFFFF",
            };
        case "blue":
            return {
                background: "#59acf4",
                badge: "#87bbe8",
                badgeTextColor: "#FFFFFF",
            };
        case "purple":
            return {
                background: "#7b548b",
                badge: "#9b73ab",
                badgeTextColor: "#FFFFFF",
            };
        case "yellow":
            return {
                background: "#ffce4b",
                badge: "#ffde85",
                badgeTextColor: "#FFFFFF",
            };
        case "green":
            return {
                background: "#49d0b0",
                badge: "#7ddec7",
                badgeTextColor: "#FFFFFF",
            };
        case "brown":
            return {
                background: "#b1736c",
                badge: "#c08c87",
                badgeTextColor: "#FFFFFF",
            };
        case "white":
            return {
                background: "#f4f5f4",
                badge: "#dfe2df",
                badgeTextColor: "#000000",
            };
        case "pink":
            return {
                background: "#f89997",
                badge: "#f5b9b5",
                badgeTextColor: "#FFFFFF",
            };
        case "gray":
            return {
                background: "#949a94",
                badge: "#c2cac2",
                badgeTextColor: "#000000",
            };
        default:
            return {
                background: "#383a38",
                badge: "#505350",
                badgeTextColor: "#FFFFFF",
            };
    }
}
