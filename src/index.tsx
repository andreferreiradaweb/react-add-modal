import styled, { css } from "styled-components"
import * as React from 'react'

export type variantPositionTypes =
  | "default"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

export interface ModalProps {
  title?: string;
  description?: string;
  customPosition?: variantPositionTypes;
  onClose?: () => void;
  onConfirm?: () => void;
  className?: string;
  visible: boolean;
  dismissible: boolean;
  stylesOverlay?: React.CSSProperties;
  stylesWrapper?: React.CSSProperties;
  stylesContainer?: React.CSSProperties;
  stylesModal?: React.CSSProperties;
}

export const Modal: React.FC<ModalProps> = ({
  onClose,
  onConfirm,
  customPosition = "default",
  title = "Default Modal",
  description = 'Some description here!',
  visible,
  dismissible = true,
  stylesOverlay,
  stylesWrapper,
  stylesContainer,
  stylesModal,
  children
}) => {

  const handleCancelModal = (): void => {
    onClose?.();
  }

  const handleConfirmModal = (): void => {
    onConfirm?.();
  }

  return (
    <>
      {visible && (
        <Wrapper style={stylesWrapper}>
          <Container style={stylesContainer} data-testid="modal-container">
            <ModalElement
              style={stylesModal}
              data-testid="modal-element"
              customPosition={customPosition}
            >
            { children ?? 
              <>
                <strong>{title}</strong>
                <p>{description}</p>
              </>
            }
              <footer>
                {dismissible ? (
                  <>
                    <a
                      data-testid="modal-cancel-link"
                      onClick={handleCancelModal}
                    >
                      Cancel
                    </a>
                    <button
                      data-testid="modal-confirm-button"
                      onClick={handleConfirmModal}
                    >
                      Ok
                    </button>
                  </>
                ) : (
                  <>
                    <a className="disabled" data-testid="modal-cancel-link">
                      Cancel
                    </a>
                    <button data-testid="modal-confirm-button" disabled>
                      Ok
                    </button>
                  </>
                )}
              </footer>
            </ModalElement>
          </Container>
          <Overlay style={stylesOverlay} onClick={() => dismissible && handleCancelModal()} />
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 99998;
`

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const variantPosition = {
  default: css`
    position: relative;
  `,
  topLeft: css`
    position: absolute;
    top: 30px;
    left: 30px;
  `,
  topRight: css`
    position: absolute;
    top: 30px;
    right: 30px;
  `,
  bottomLeft: css`
    position: absolute;
    bottom: 30px;
    left: 30px;
  `,
  bottomRight: css`
    position: absolute;
    bottom: 30px;
    right: 30px;
  `,
}

export interface ModalElementProps {
  customPosition: variantPositionTypes;
}

const ModalElement = styled.div<ModalElementProps>`
  ${({ customPosition }) => variantPosition[customPosition || "default"]};
  padding: 20px;
  z-index: 99999;
  width: 350px;
  background: #fff;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  strong {
    color: "#000000d9";
    font-weight: 500;
    font-size: 20px;
  }

  * {
    font-family: "Open Sans";
  }

  p {
    font-size: 15px;
  }

  footer {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    display: flex;

    justify-content: flex-end;
    align-items: center;

    a {
      color: #0a345e;
      margin-right: 40px;
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;

      &.disabled {
        color: #f9f9f9;
        cursor: default;
      }
    }

    button {
      cursor: pointer;
      font-weight: 400;
      font-size: 1rem;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      color: #e4e4e4;
      background: #0a345e;
      transition: 0.5s all;

      &:disabled {
        cursor: auto;
        background: #f9f9f9;
      }

      &:not([disabled]):hover {
        transition: 0.5s all;
        background: #405d8c;
      }
    }
  }
`

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 8;
`
