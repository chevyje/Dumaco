function collapse() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="collapsible" onClick={toggleCollapse}>
                Toggle
            </button>
            <div className={`content ${isOpen ? "open" : ""}`}>
                {isOpen && <p>This is the collapsible content.</p>}
            </div>
        </div>
    );
}

export default collapse();