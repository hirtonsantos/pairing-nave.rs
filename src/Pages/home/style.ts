import styled from "styled-components"

export const Container = styled.div`
	.MuiDataGrid-columnHeader{
        background: dodgerblue;
        color: white;
    }
    .MuiDataGrid-footerContainer {
        background: white;
    }

    .MuiDataGrid-virtualScroller.css-1w5m2wr-MuiDataGrid-virtualScroller {
        width: 390px;
        height: 208px;
    }
`

export const ContentMain = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    h1 {
        width: 363px;
        height: 32px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        margin-bottom: 3px;
        font-size: 23px;
        line-height: 28px;
        color: #EEEEEE;
    }
    h2 {
        width: 363px;
        margin-bottom: 10px;
        height: 32px;
        font-family: monospace;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF; 
    }
`

export const ContentButtons = styled.header`
    display: flex;
    justify-content: center;
    margin-bottom: 20px; 
`