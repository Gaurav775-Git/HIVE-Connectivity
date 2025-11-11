import React from 'react';
import styled from 'styled-components';
import Compute from '@/pages/Compute';
import { useNavigate } from 'react-router-dom';

const Form_rent = () => {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="">
          <label className="">
            <input type="checkbox" className="toggle" />
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <div className="title">GPU Required</div>
                <form className="flip-card__form">
  {/* GPU Model Dropdown */}
  <label htmlFor="gpuModel" className="flip-card__label">
    GPU Model
  </label>
  <select
    id="gpuModel"
    name="gpuModel"
    className="flip-card__input"
    defaultValue=""
  >
    <option value="" disabled>
      Select GPU Model
    </option>
    <option value="RTX 4090">RTX 4090</option>
    <option value="A100">A100</option>
    <option value="Tesla V100">Tesla V100</option>
  </select>

  {/* VRAM */}
  <label htmlFor="vram" className="flip-card__label">
    VRAM (GB)
  </label>
  <input
    className="flip-card__input"
    name="vram"
    type="number"
    placeholder="16, 24, 32..."
  />

  {/* Cores */}
  <label htmlFor="cores" className="flip-card__label">
    Cores
  </label>
  <input
    className="flip-card__input"
    name="cores"
    type="number"
    placeholder="e.g. 10240"
  />

  {/* Notes */}
  <label htmlFor="notes" className="flip-card__label">
    Notes
  </label>
  <input
    className="flip-card__input"
    name="notes"
    type="text"
    placeholder="Any additional info"
  />

  {/* Submit Button */}
  <button 
  onClick={() => navigate("/compute")}
  type="submit" className="flip-card__btn">
    Let's Go!
  </button>
</form>

              </div>
              
            </div>
          </label>
        </div>   
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .wrapper {
    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --bg-color-alt: #666;
    --main-color: #323232;
      /* display: flex; */
      /* flex-direction: column; */
      /* align-items: center; */
  }
  /* switch card */
  .switch {
    transform: translateY(-200px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 40vw;
    height: 100vh;

  }

  .card-side::before {
    position: absolute;
    content: 'Log in';
    left: -70px;
    top: 0;
    width: 100px;
    text-decoration: underline;
    color: var(--font-color);
    font-weight: 600;
  }

  .card-side::after {
    position: absolute;
    content: 'Sign up';
    left: 70px;
    top: 0;
    width: 100px;
    text-decoration: none;
    color: var(--font-color);
    font-weight: 600;
  }

  .toggle {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-colorcolor);
    transition: 0.3s;
  }

  .slider:before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    border: 2px solid var(--main-color);
    border-radius: 5px;
    left: -2px;
    bottom: 2px;
    background-color: var(--bg-color);
    box-shadow: 0 3px 0 var(--main-color);
    transition: 0.3s;
  }

  .toggle:checked + .slider {
    background-color: var(--input-focus);
  }

  .toggle:checked + .slider:before {
    transform: translateX(30px);
  }

  .toggle:checked ~ .card-side:before {
    text-decoration: none;
  }

  .toggle:checked ~ .card-side:after {
    text-decoration: underline;
  }

  /* card */ 

  .flip-card__inner {
    width: 50vw;
    height: 120vh;
    position: relative;
    top:20vh;
    left:10vw;
    background-color: transparent;
    perspective: 1000px;
      /* width: 100%;
      height: 100%; */
    text-align: center;
  }

 

  .toggle:checked ~ .flip-card__front {
    box-shadow: none;
  }

  .flip-card__front, .flip-card__back {
    width: 50vw;
    padding: 20px;
    position: absolute;
    display: flex;
    justify-content: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: lightgrey;
    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
  }

  .flip-card__back {
    width: 100%;
    transform: rotateY(180deg);
  }

  .flip-card__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .title {
    margin: 20px 0 20px 0;
    font-size: 25px;
    font-weight: 900;
    text-align: center;
    color: var(--main-color);
  }

  .flip-card__input {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
  }

  .flip-card__input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
  }

  .flip-card__input:focus {
    border: 2px solid var(--input-focus);
  }

  .flip-card__btn:active, .button-confirm:active {
    box-shadow: 0px 0px var(--main-color);
    transform: translate(3px, 3px);
  }

  .flip-card__btn {
    margin: 20px 0 20px 0;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 17px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
  }`;

export default Form_rent;
