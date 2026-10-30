import './App.css';

function Card({ title, description}) {
  return (
    <div className="card-box" style={{border: '1px solid #aaa', padding: '15px', marginBottom: '10px', borderRadius: '6px',}}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function UserProfile({name, role, avatarURL }) {
  return(
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px', marginTop: '15px' }}>
      <img src={avatarURL} alt="picture" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      <div>
        <h3 style={{ margin: 0 }}>{name}</h3>
        <span style={{ background: '#3d1a5a', color: '#0d0221', padding: '2px 8px', fontSize: '12px', borderRadius: '4px' }}>{role}
        </span>
      </div>
    </div>
  );
}
export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Props Practice</h1>

      <Card title="tulfone" description="best phone"/>
      <Card title="idk" description="any description"/>
      <Card title= "amazing" description="wow"/>

      <hr style={{ margin: '20px 0' }} />

      <h2>User Profiles</h2>
      <UserProfile 
      name="random guy"
      role="senior developer"
      avatarURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl4Wf7XGytsTz6Df4LoLp7xKPMIUUZuJmwxLj8kU9JpQ&s=10"
      />
      <UserProfile 
      name="hansen"
      role="fullstack developer"
      avatarURL="https://avatars.githubusercontent.com/u/321646938?v=4"
      />
      <p class="explanation" ># Answer to Action Item 4: The 'children' Prop

* **What is the `children` prop?**
  The `children` prop is a special prop that is automatically passed to every React component. It represents any elements, HTML tags, or text nested *between* the opening and closing tags of that component when it is invoked.

* **When would you use it?**
  You use the `children` prop when creating generic layout or wrapper components—such as modals, cards, containers, or panels—where you want the outer structure to stay identical, but the internal content needs to change dynamically every time you reuse the component wrapper.</p>
      </div>    
  );
}