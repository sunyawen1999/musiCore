import { Song } from "@/types";

import userPlayer from "./userPlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import useSubscribeModal from "./useSubscribeModal";

const useOnPlay = ( songs: Song[]) => {
    const player = userPlayer();
    const subscribeModal = useSubscribeModal();
    const authModal = useAuthModal();
    const { user, subscription } = useUser();

    const onPlay = ( id: string ) => {
        if(!user) {
            return authModal.onOpen();
        }

        if(!subscription) {
            return subscribeModal.onOpen();
        }

        player.setId(id);
        player.setIds(songs.map((song) => song.id));
    }
    
    return onPlay;
};

export default useOnPlay;