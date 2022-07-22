import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Transportadora from "./payoneer/Transportadora";
import ICorreio from "./paypal/ICorreio";

const transporter : ICorreio = new TransportadoraAdapter(new Transportadora());
transporter.send();
transporter.receive();