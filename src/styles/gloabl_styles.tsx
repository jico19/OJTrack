// constants/styles.ts
import { StyleSheet } from "react-native";

export const colors = {
    primary: "#4CAF50",
    primaryDark: "#388E3C",
    danger: "#ef4444",
    warning: "#f59e0b",
    text: "#1a1a1a",
    textMuted: "#6b7280",
    border: "#d1d5db",
    background: "#fff",
    surface: "#f9fafb",
};

export const globalStyles = StyleSheet.create({
    // Containers
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: colors.background,
    },
    safeContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    colContainer: {
        flexDirection: 'column',
        gap: 16,        
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    rowBetween: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    // Typography
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.text,
        marginBottom: 4,
    },
    subheading: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.text,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: colors.text,
        marginBottom: 4,
    },
    muted: {
        fontSize: 14,
        color: colors.textMuted,
    },

    // Input
    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
        marginBottom: 4,
        color: colors.text,
        backgroundColor: colors.background,
    },
    inputError: {
        borderColor: colors.danger,
    },
    textarea: {
        height: 100,
        textAlignVertical: "top",
    },
    errorText: {
        fontSize: 12,
        color: colors.danger,
        marginBottom: 8,
    },

    // Buttons
    btnPrimary: {
        backgroundColor: colors.primary,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
    },
    btnDanger: {
        backgroundColor: colors.danger,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
    },
    btnOutline: {
        borderWidth: 1,
        borderColor: colors.primary,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
    },
    btnText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
    btnOutlineText: {
        color: colors.primary,
        fontWeight: "600",
        fontSize: 16,
    },

    // Card
    card: {
        backgroundColor: colors.background,
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: colors.border,
    },

    // Divider
    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: 12,
    },
});