import React, {useState , useRef , useEffect} from 'react';
import {SpeedDial} from 'primereact/speeddial'
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'


export const Marquee = () =>{


  
      const toast = useRef(null);
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                   window.location.href = 'https://gemclone.onrender.com/gemini/newchat';
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                //    window.location.href = '';
                   window.location.reload()
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                   window.location.href = '';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
                   window.location.href = '';
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://gemclone.onrender.com/gemini/newchat' ;
            }
        }
    ];


    return (
        <>
   

      <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-left" style={{ right: 30, bottom: 20  }} id='Speeddial'/>
        </>
    )
}