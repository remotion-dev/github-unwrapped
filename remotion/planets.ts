import { staticFile } from "remotion";
import { PlanetEnum, type Planet } from "../src/config";
import { type availableGradients } from "./Gradients/available-gradients";

const SILVER_PLANET = staticFile("planet-silver.png");
const ICE_PLANET = staticFile("planet-ice.png");
const GOLD_PLANET = staticFile("planet-gold.png");
const FIRE_PLANET = staticFile("planet-fire.png");
const LEAFY_PLANET = staticFile("planet-leafy.png");

export const planetToGradient = (
  planet: Planet,
): keyof typeof availableGradients => {
  switch (planet) {
    case PlanetEnum.enum.Leafy:
      return "leafyRadial";
    case PlanetEnum.enum.Fire:
      return "fireRadial";
    case PlanetEnum.enum.Silver:
      return "silverRadial";
    case PlanetEnum.enum.Ice:
      return "iceRadial";
    default:
      return "white"; // not used
  }
};

export const planetToCTAGradient = (planet: Planet) => {
  switch (planet) {
    case PlanetEnum.enum.Leafy:
      return "linear-gradient(270.02deg, #54ad52 20.63%, #9af7bf 99.87%)";
    case PlanetEnum.enum.Fire:
      return "linear-gradient(270.02deg, #ad5d52 20.63%, #f7a69a 99.87%)";
    case PlanetEnum.enum.Silver:
      return "linear-gradient(270.02deg, #bbb 20.63%, #fff 99.87%)";
    case PlanetEnum.enum.Ice:
      return "linear-gradient(270.02deg, #91AAD4 20.63%, #9ac4f7 99.87%)";
    default:
      return "linear-gradient(270.02deg, #AD8C52 20.63%, #F7E99A 99.87%)";
  }
};

export const planetToCatColor = (planet: Planet) => {
  switch (planet) {
    case PlanetEnum.enum.Leafy:
      return "#9af7bf";
    case PlanetEnum.enum.Fire:
      return "#f7a69a";
    case PlanetEnum.enum.Silver:
      return "#fff";
    case PlanetEnum.enum.Ice:
      return "#9ac4f7";
    default:
      return "#F7E99A";
  }
};

export const planetToCTABg = (planet: Planet) => {
  switch (planet) {
    case PlanetEnum.enum.Leafy:
      return "#002101";
    case PlanetEnum.enum.Fire:
      return "#290700";
    case PlanetEnum.enum.Silver:
      return "#262626";
    case PlanetEnum.enum.Ice:
      return "#1C2056";
    default:
      return "#291C0B";
  }
};

export const prefetchPlanetImage = (planet: Planet) => {
  switch (planet) {
    case PlanetEnum.enum.Leafy:
      return LEAFY_PLANET;
    case PlanetEnum.enum.Fire:
      return FIRE_PLANET;
    case PlanetEnum.enum.Silver:
      return SILVER_PLANET;
    case PlanetEnum.enum.Ice:
      return ICE_PLANET;
    default:
      return GOLD_PLANET;
  }
};

export const getPlanetFile = (planet: Planet) => {
  switch (planet) {
    case PlanetEnum.enum.Fire:
      return FIRE_PLANET;
    case PlanetEnum.enum.Leafy:
      return LEAFY_PLANET;
    case PlanetEnum.enum.Silver:
      return SILVER_PLANET;
    case PlanetEnum.enum.Ice:
      return ICE_PLANET;
    default:
      return GOLD_PLANET;
  }
};
