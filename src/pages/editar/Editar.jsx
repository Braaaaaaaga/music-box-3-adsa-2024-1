import api from "../../api";
import { toast } from 'react-toastify';
import styles from "./Editar.module.css";
import { useParams } from "react-router-dom";
import logo from "../../utils/assets/logo.svg";
import { useNavigate } from "react-router-dom";
import transformarData from "../../utils/globals";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import imgPessoaOuvindoMusica from
    "../../utils/assets/pessoa-ouvindo-musica.svg";
function Editar() {
    const navigate = useNavigate();
    const { idCard } = useParams();
    const [nomeMusica, setNomeMusica] = useState("");
    const [genero, setGenero] = useState("");
    const [artista, setArtista] = useState("");
    const [imagem, setImagem] = useState("");
    const [ano, setAno] = useState("");
    useEffect(() => {
        api.get(`/${idCard}`).then((response) => {
            const { data } = response;
            const { nomeMusica, artista, genero, ano, imagem } =
                data;
            setNomeMusica(nomeMusica);
            setArtista(artista);
            setGenero(genero);
            setAno(transformarData(ano));
            setImagem(imagem);
        })
            .catch((error) => {
                console.log("Erro ao buscar os detalhes da música: ", error);
            })
    }, [idCard]);
    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    };
    const handleSave = async () => {
        try {
            await api.put(`/${idCard}`, {
                ano,
                nomeMusica,
                artista,
                imagem,
                genero
            });
            toast.success('Dados editados com sucesso!');
            navigate("/musicas")
        } catch (error) {
            toast.error('Ocorreu um erro ao salvar os dados. Por favor, tente novamente.');
        }
    };
    const handleCancel = () => {
        navigate("/musicas");
    };
    return (
        <>
            <NavBar logoInicio={logo} />
            <div className={styles.container}>
                <div className={styles["secao-esquerda-editar"]}>
                    <img src={imgPessoaOuvindoMusica} alt="Imagem
de uma pessoa ouvindo música" />
                </div>
                <div className={styles["secao-direita-editar"]}>
                    <form>
                        <h1>Editar</h1>
                        <input
                            type="text"
                            value={nomeMusica}
                            placeholder="Nome da música"
                            onChange={(e) => handleInputChange(e,
                                setNomeMusica)}
                        />
                        <input
                            type="text"
                            value={artista}
                            placeholder="Artista"
                            onChange={(e) => handleInputChange(e,
                                setArtista)}
                        />
                        <input
                            type="text"
                            value={genero}
                            placeholder="Gênero"
                            onChange={(e) => handleInputChange(e, setGenero)}
                        />
                        <input
                            type="text"
                            value={ano}
                            placeholder="Ano de Lançamento"
                            onChange={(e) => handleInputChange(e, setAno)}
                        />
                        <input
                            type="text"
                            value={imagem}
                            placeholder="URL da Imagem"
                            onChange={(e) => handleInputChange(e, setImagem)}
                        />
                        <div className={styles["buttons-container-editar"]}>
                            <button type="button" onClick={handleSave}>
                                Salvar
                            </button>
                            <button type="button"
                                onClick={handleCancel}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Editar;