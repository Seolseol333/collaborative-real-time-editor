export const TabPanel = ({ value, index, children }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}>
            {children}
        </div>);
}