const Menu = () => {
  const menuItems = [
    { icon: '🏠', text: 'Home' },
    { icon: '📹', text: 'Short' },
    { icon: '📂', text: 'Subscriptions' },
    { icon: '⭐', text: 'Favs' }
  ];

  return (
    <aside className="col-start-1 col-end-2 row-start-2 row-end-3 py-0 pr-4 pl-0">
      {menuItems
        // .filter(item => !item.text.startsWith("S"))
        .map((item) => (
          <div
            key={`menu-item-${item.text}`}
            className="p-4 rounded-2xl flex flex-row gap-2 items-center hover:bg-[#282828]"
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))
      }
    </aside>
  );
}

export default Menu;