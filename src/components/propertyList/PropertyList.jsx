import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
    <div className="pListItem">
      <img
        src="https://images.unsplash.com/photo-1594397360555-08337481ca4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80"
        alt=""
        className="pListImg"
      />
      <div className="pListTitles">
        <h1>Hotels</h1>
        <h2>400 hotels</h2>
      </div>
    </div>
    <div className="pListItem">
      <img
        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="pListImg"
      />
      <div className="pListTitles">
        <h1>Apartments</h1>
        <h2>2500 hotels</h2>
      </div>
    </div>
    <div className="pListItem">
      <img
        src="https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="pListImg"
      />
      <div className="pListTitles">
        <h1>Resorts</h1>
        <h2>2600 hotels</h2>
      </div>
    </div>
    <div className="pListItem">
      <img
        src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
        alt=""
        className="pListImg"
      />
      <div className="pListTitles">
        <h1>Villas</h1>
        <h2>3000 hotels</h2>
      </div>
    </div>
    <div className="pListItem">
      <img
        src="https://images.unsplash.com/photo-1550355191-aa8a80b41353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
        className="pListImg"
      />
      <div className="pListTitles">
        <h1>Cabins</h1>
        <h2>6000 hotels</h2>
      </div>
    </div>
  </div>
);
};

export default PropertyList