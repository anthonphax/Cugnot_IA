import Image from 'next/image';
import { Button } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import Box from '@mui/material/Box';

export default function Uploader() {
    return(
        <div>
        <Box sx={{ 
        height: 600, width: 800, borderWidth: 3, borderColor: '#ddd', borderStyle: 'dashed'
        }}
        >
            <Box sx={{ 
                height: 600, 
                width: 800,
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Image src="https://www.imagetotext.info/web_assets/frontend/img/icons/tool-box-image.svg" alt="image-logo" class="upload-section-img" width="100" height="100"/>
                <b>ABC</b>

                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<UploadIcon/>}
                >
                    Upload file
                    <visuallyHidden type="file" />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
                </Button>
            </Box>
        </Box>
    </div>
    )
}