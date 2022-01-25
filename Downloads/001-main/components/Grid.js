import styles from '../styles/Grid.module.css'
import React, { useContext } from "react";
import { AppContext } from "../components/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import {
    collection,
    query,
    onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

const Grid = () => {

    const [gridItems, setGridItems] = React.useState([]);
    const { setModal, modal } = useContext(AppContext);

    React.useEffect(() => {
        const q = query(collection(db, "gridImages"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let itemsArray = [];
            querySnapshot.forEach((doc) => {
                itemsArray.push({ ...doc.data(), id: doc.id });
            });
            setGridItems(itemsArray);
        });
        return () => unsub();
    }, []);

    return (
        <div className={styles._container}>
            <form>
                <input id='_actual' type='file' hidden />
                {/* <label htmlFor='_actual'> */}
                    <div className={styles._plus} style={{ }} id='adhoc' onClick={() => {
                         setModal(!modal);
                    }}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </div>
                {/* </label> */}
            </form>
            {
            gridItems.map((gridItem) => (
                <Item 
                key={gridItem.id} 
                dp={gridItem.dp} 
                userName={gridItem.userName} 
                quote={gridItem.quote} 
                url={gridItem.url}
                tags={gridItem.tags}
                fullObject={gridItem}
                 />
            ))
            }
        </div>
    );
}

export default Grid;

function Item(props) {

    const { setPostImage, setPostDP, setPostUser, setPostQuote, setPostTags, setFullObject, } = useContext(AppContext);
    const _url = 'url(' + props.url + ')';

    return (
        <div className={styles._gridPost} style={{ background: _url, backgroundSize: "cover", backgroundPosition: 'center' }} onClick={() => {
            setPostImage(props.url)
            setPostDP(props.dp)
            setPostUser(props.userName)
            setPostQuote(props.quote)
            setPostTags(props.tags)
            setFullObject(props.fullObject)
        }} />
    );
}