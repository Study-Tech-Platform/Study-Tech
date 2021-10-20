import styled from 'styled-components';

export const Container = styled.div``;

export const LogoImg = styled.img`
    
    display: none;

    @media(max-width: 400px){
        display: block;
        box-sizing: border-box;
        height: 100%;
        margin-left: 15px;
        border: 1px solid #fff;
        border-radius: 2px;
    }
`;

export const AreaLogin = styled.div`
    display: ${props => props.mostrar?"flex":"none"};
    flex-direction: column;
    position: fixed;
    top: 60px;
    right: 0;
    background-color: #152126;
    padding: 2px;
    transition: all ease .5s;
    height: ${props => props.animar?"55px":"0"};
`;

export const AreaLoginButton = styled.button`
    background-color: #a6c2ff;
    border: 0;
    font-size: 17px;
    border-radius: 3px;
    
    :first-of-type{
        margin-bottom: 5px;
    }
`;

export const UserImg = styled.img`
    height: 100%;
    margin-left: auto;
    margin-right: 20px;
`;

export const Header = styled.header`
    background-color: #0d378c;
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    position: fixed;
    border-bottom: 2px solid #0553f1;
    padding: 5px 0;
`;

export const Title = styled.h2`
    color: #ffffff;
    font-size: 30px;
    margin: 0;
    padding-left: 50px;
    font-weight: normal;

    @media(max-width: 400px) {
        display: none;
    }
`;

export const Cadastro = styled.button`
    background-color: transparent;
    color: #d9d9d9;
    font-size: 20px;
    border: 0;
    margin-left: auto;
    cursor: pointer;

    @media(max-width: 400px) {
        display: none;
    }
`;

export const OutlineButton = styled.button`
    color: #fff;
    background-color: transparent;
    font-size: 20px;
    border: 2px solid #38b6ff;
    border-radius: 5px;
    padding: 5px 30px;
    margin: 0 30px;
    cursor: pointer;
    transition: all ease .3s;    

    display: ${props => props.mostrar <= 400?"none":"block"};

    :nth-child(2){
        font-size: 25px;
    }

    :hover{
        border-color: #ff6e18;
    }

    @media(max-width: 400px){
        width: 200px;
    }
`;

export const SolidButton = styled.button`
    color: #fff;
    background-color: #0554f2;
    font-size: 20px;
    border: 2px solid #38b6ff;
    border-radius: 5px;
    padding: 5px 30px;
    cursor: pointer;

    :nth-child(1){
        font-size: 25px;
    }

    @media(max-width: 400px){
        width: 200px;
        margin: 30px 0 20px 0;
    }
`;

export const Main = styled.main`
    width: 100vw;
    padding: 0 30px 50px 50px;
    box-sizing: border-box;
    background-color: #0d378c;
    display: flex;
    padding-top: 70px;
    border-bottom: 2px solid #0d378c;

    @media(max-width: 400px){
        flex-direction: column;
        padding: 80px 15px 30px 15px;
    }
`;

export const MainTextArea = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Badge = styled.p`
    background-color: #ff6e18;
    color: #152126;
    border: 0;
    border-radius: 5px;
    padding: 5px;
    font-weight: bold;
    margin: 0;
`;

export const Message = styled.p`
    margin: 0;
    color: #7fbbf2;
    padding-left: 10px;
    font-weight: bold;
`;

export const TextArea = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
    
    @media(max-width: 400px){
        
        :nth-child(1){
            justify-content: center;
        }

        :nth-child(5){
            flex-direction: column;            
        }
    }
`;

export const TitleIntroduction = styled.h1`
    color: #d9d9d9;
    font-size: 50px;
    margin: 0;
    width: 90%;
    padding-top: 20px;

    @media(max-width: 400px){
        font-size: 35px;
        text-align: center;
        width: 100%;
    }
`;

export const Description = styled.h2`
    color: #d9d9d9;
    width: 600px;
    font-weight: normal;
    font-size: 25px;

    @media(max-width: 400px){
        font-size: 20px;
        text-align: justify;
        width: 100%;
    }
`;

export const BannerImg = styled.img`
    width: 80%;
    display: ${props => props.mostrar?"block":"none"};
    
    @media(max-width: 400px){
        display: ${props => props.mostrar?"none":"block"};
        width: 100%;
    }
`;

export const MainImgArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

export const Section = styled.section`
    background-color: #ccddff;
    display: flex;
    min-width: 100vw;
    max-width: 100vw;
    padding: 30px 30px 45px 50px;
    box-sizing: border-box;
    border-bottom: 2px solid #0d378c;
    
    :last-child{
        flex-direction: column;
        color:#d9d9d9;
    }
`;

export const SectionArea = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    :nth-child(2){
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        flex: 1.5;
    }
`;

export const SectionAreaColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const SectionSubtitle = styled.h3`
    color: #152126;
    font-weight: bold;
    font-size: 45px;
    margin: 0;
`;

export const SectionButton = styled.button`
    color: #fff;
    background-color: #0d378c;
    font-size: 30px;
    border-radius: 5px;
    width: 20rem;
    border: 2px solid transparent;
    margin: 20px 0 0 0;
    cursor: pointer;
`;

export const SectionTitle = styled.h3`
    font-weight: bold;
    color: #152126;
    font-size: 40px;
    margin: 0;
    text-align: center;
`;

export const SectionDesc = styled.p`
    font-size: 35px;
    color: #152126;
    margin: 0;
    font-size: 25px;
    padding-top: 20px;
    width: 80%;
`;

export const SectionImg = styled.img`
    border-radius: 20px;
    background-color: #fff;
    width: 100px;
    height: 100px;
    border: 2px solid #fff;
`;

export const ArticleArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 40px;
`;

export const Article = styled.article`
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    align-items: center;
    width: 300px;
    background-color: #a0bbf2;
    transition: box-shadow .3s ease-in-out;
    border: 5px solid #fffef5;
    box-shadow: 0 0 30px #16e2fd;
    margin-bottom: 30px;
`;

export const ArticleTitle = styled.h3`
    color: #152126;
    font-size: 32px;
    margin: 0;
    padding: 5px 0 15px 0;
`;

export const ArticleText = styled.p`
    color: #152126;
    font-size: 25px;
    margin: 0;
    text-align: center;
`;