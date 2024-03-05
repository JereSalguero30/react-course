import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formatUsername = (userName) => `@${userName}`
    const salguerosanti = {isFollowing: false, userName : salguerosanti}

    return (
        <section className='App'>
            <TwitterFollowCard 
            formatUserName={formatUsername} 
            isFollowing={false} userName="salguerojere" 
            user="JereSalguero30" 
            />
            <TwitterFollowCard {...salguerosanti}/>
        </section>
    )
}