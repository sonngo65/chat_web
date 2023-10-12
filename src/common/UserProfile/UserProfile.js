import './_user-profile.scss';
const getInitials= (string)=>{
    return string.match(/\b(\w)/g).slice(0,2).join('').toUpperCase();
}


export default function UserProfile({color,name,icon}){
    return(
        <div className="user-profile" >
            {icon!=="" ? <img src={icon}/> : <p>{getInitials(name)}</p>}

        </div>
        
    )
}