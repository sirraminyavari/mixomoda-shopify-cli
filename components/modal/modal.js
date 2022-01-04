import { Modal as MaterialModal } from "@mui/material";
import { ContentContainer, ContentSection, TitleContainer, TitleArea, MainContent, ExitButton } from "./modal.styles";
import CloseIcon from "../../icons/Close";

const Modal = (props) => {
    const { open, onClose, title, children } = props;

    return (
        <MaterialModal
            open={ open }>
            <ContentContainer>
                <ContentSection onClick={(e) => e.stopPropagation()}>
                {!title ? (<></>) : (
                    <>
                        <TitleContainer>
                            <ExitButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onClose();
                                }}>
                                <CloseIcon />
                            </ExitButton>
                            <TitleArea>{ title }</TitleArea>
                        </TitleContainer>
                    </>
                )}
                <MainContent {...props}>{ children }</MainContent>
                </ContentSection>
            </ContentContainer>
        </MaterialModal>
    );
};

export default Modal;