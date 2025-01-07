"use client"

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";

import Modal from "./Modal";

import useAuthModal from "@/hooks/useAuthModal";


const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    const { onClose, isOpen } = useAuthModal();

    useEffect(() => {
        if (session) {
            console.log("Closing modal...");
            router.refresh();
            onClose();
        }
    }, [session, router, onClose]);
    
    console.log("Modal isOpen state:", isOpen);
    

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    return ( 
        <Modal
          title="Welcome back"
          description="Login to your account"
          isOpen={isOpen}
          onChange={onChange}
        >
          <Auth
            theme="dark"
            magicLink
            providers={["github"]}
            supabaseClient={supabaseClient}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors:{
                    brand: '#404040',
                    brandAccent: '#FF69B4'
                  }
                }
              }
            }}
          />
        </Modal>
    );
}
 
export default AuthModal;