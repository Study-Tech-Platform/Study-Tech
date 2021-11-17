import React from 'react';
import { useHistory } from 'react-router-dom';

import {

    Container,
    Menu,
    MenuTitle,
    BannerArea,
    BannerBtn,
    BannerImg,
    BannerItem,
    BannerTitle,
    BannerImgAdd

} from './style';

import Exemplo from '../../../../img/exemplo.jpg';
import AddIcon from '../../../../img/add.png';

const Banner = () => {

    let history = useHistory();

    function changeScreen(screen){

        history.push(`/admin/banner/${screen}`);

    }

    return(

        <Container>

            <Menu>
                <MenuTitle>Banners</MenuTitle>
            </Menu>

            <BannerArea>                

                <BannerItem>

                    <BannerTitle>Titulo Banner</BannerTitle>

                    <BannerImg src={Exemplo} />

                    <BannerBtn>Acessar</BannerBtn>

                </BannerItem>

                <BannerItem>

                    <BannerTitle>Titulo Banner</BannerTitle>

                    <BannerImg src={Exemplo} />

                    <BannerBtn>Acessar</BannerBtn>

                </BannerItem>

                <BannerItem>

                    <BannerTitle>Titulo Banner</BannerTitle>

                    <BannerImg src={Exemplo} />

                    <BannerBtn>Acessar</BannerBtn>

                </BannerItem>

                <BannerItem onClick={() => {changeScreen('add')}}>

                    <BannerImgAdd src={AddIcon} />

                </BannerItem>

            </BannerArea>

        </Container>

    );

}

export default Banner;