import { selectOptions } from "@testing-library/user-event/dist/select-options";

const FighterScreen = ({isVisible, setVisible, selectCharacter}) => {
    return(
        <div onClick={() => {setVisible(false)}} className="fighter-screen" style={{display: isVisible ? "block" : "none"}}>
          <span>{selectOptions.name}</span>
          <h2>{selectCharacter.name}</h2>
            <img characterName="char-portrait" width="100" height="100" src={`https://www.smashbros.com/assets_v2/img/fighter/${selectCharacter.name.toLowerCase()}/main.png`}></img>
            <p>
            sdakjfksdjfl;kaj;lk asd;fja;ksdhfkasjkj asd;lkja;ksdhfkjsdhfjkhd a;sdhfakljsdhfjkahds ashdfkjahsdfkj
            </p>
        
    </div>

    )
}

export default FighterScreen;