import { styled } from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .MuiPaper-root {
    max-width: 50rem;

    .MuiTable-root {
      min-width: 40rem;
    }
  }

  .MuiStack-root {
    max-width: 50rem;
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`;
