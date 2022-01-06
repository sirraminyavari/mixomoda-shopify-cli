import { toast } from 'react-toastify';

const InfoMessage = ({ message }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "270px" }}>
            <span style={{ flexGrow: 1, justifySelf: 'start', padding: '0.5rem' }}>{ message }</span>
        </div>
    );
};

const Toast = ({ type, message }) => {
    const toastOptions = { position: 'bottom-right', autoClose: 5000, hideProgressBar: true };
    const infoMessage = <InfoMessage message={ message } />;

    return ["info", "success", "warning", "error", "dark"].some(t => t === type) ?
        toast[type](infoMessage, toastOptions) : toast(infoMessage, toastOptions);
};

export default Toast;
