const MainContainer = ({ children }) => {
  return (
    <main className="flex-1 overflow-hidden">
      <div className="h-full">
        {children}
      </div>
    </main>
  );
};

export default MainContainer;