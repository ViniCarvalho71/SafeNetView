const DashContainer = ({ sidebar, content }) => {
  return (
    <div className="flex h-screen m-0 p-0">
      <div className="w-64 bg-gray-800 text-white">
          {sidebar}
        </div>
  
        {/* Content */}
        <div className="flex-1 p-8 bg-gray-100">
          {content}
        </div>
    </div>
  );
};

export default DashContainer;
