import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tela-principal',
    templateUrl: './tela-principal.component.html',
    styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    items = [
        {
            "product": {
                "id": 2321312,
                "name": "Smartphone Apple iPhone 7 128GB",
                "images": [
                    "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg",
                    "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_2_c.jpg?v=2347575274",
                    "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_3_c.jpg?v=318433138",
                    "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_4_c.jpg?v=33273730"
                ],
                "price": {
                    "value": 3509.10,
                    "installments": 10,
                    "installmentValue": 389.90
                }
            }
        },
        {
            "product": {
                "id": 9971,
                "name": "Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana",
                "images": [
                    "http://mthumbs.buscape.com.br/tv/smart-tv-samsung-serie-4-un32j4300ag-32-polegadas-led-plana_600x600-PU95547_1.jpg",
                    "http://thumbs.buscape.com.br/__400x400-PU95547_2_c.jpg?v=3988579075",
                    "http://thumbs.buscape.com.br/__400x400-PU95547_4_c.jpg?v=4208003525",
                    "http://thumbs.buscape.com.br/__231312400x400-PU95547_5_c.jpg?v=1473261122"
                ],
                "price": {
                    "value": 1139.90,
                    "installments": 10,
                    "installmentValue": 134.11
                }
            }
        },
        {
            "product": {
                "id": 6717132,
                "name": "Câmera Digital Canon EOS Rebel T5i 18.0 Megapixels",
                "images": [
                    "http://mthumbs.buscape.com.br/camera-digital/canon-eos-rebel-t5i-18-0-megapixels_600x600-PU7bf7b_1.jpg"
                ],
                "price": {
                    "value": 1999.20,
                    "installments": 10,
                    "installmentValue": 235.20
                }
            }
        },
        {
            "product": {
                "id": 6717131,
                "name": "Lenovo IdeaPad 310 80UH0004BR Intel Core i7-6500U 2.5 GHz 8192 MB 1024 GB",
                "images": [
                    "http://mthumbs.buscape.com.br/notebook/lenovo-ideapad-310-80uh0004br-intel-core-i7-6500u-2-5-ghz-8192-mb-1024-gb_600x600-PU98e6e_1.jpg"
                ],
                "price": {
                    "value": 2599.00,
                    "installments": 10,
                    "installmentValue": 259.90
                }
            }
        }
    ];

    itensCarrinho = [];

    total = 0
    parcial = 0

    adicionarCarrinho(id) {
        let obj;
        let verifica 
        let tot = 1
        let cont = 0

        this.items.filter(d => { if (d.product.id == id) obj = d});
        this.itensCarrinho.filter(d => {if (d.product.id == id) cont = id})
        if(cont != id){
            this.itensCarrinho.push(obj);      
        }else{
            this.itensCarrinho.push(obj)
            console.log(obj);
            
        }
        
        
        
        this.total = this.total + obj.product.price.value
        this.parcial = this.parcial + obj.product.price.installmentValue
        

        

        //for (let i = 0; i <= this.itensCarrinho.length - 1; i++) {
        //    if (obj.product.id == this.itensCarrinho[i].product.id) {
        //        console.log("igual")
        //    }else{
        //        console.log("nao")
        //    }
        //}
    }
    verificaId(id){
        //let obj
        //this.itensCarrinho.filter(d => {if (d.product.id == id) obj =d})
        //this.itensCarrinho.push(obj)
    }

    abrirCarrinho() {
        this.itensCarrinho;
    }

    apagaItemCarrinho(id) {

        let arrayAux = []

        //this.itensCarrinho.filter( d => {d.product.id !== id})
    
        //this.itensCarrinho.push(obj)
        //this.total = this.total - obj.product.price.value
        //this.parcial = this.parcial - obj.product.price.installmentValue
        //console.log(this.total)

        //this.itensCarrinho = this.itensCarrinho.filter(d => {d.product.id != id});
        for (let i = 0; i <= this.itensCarrinho.length - 1; i++) {
            
            if (id != this.itensCarrinho[i].product.id) {
                
                arrayAux.push(this.itensCarrinho[i])

            } else {
                //diminui os valores do subtotal
                this.total = this.total - this.itensCarrinho[i].product.price.value
                this.parcial = this.parcial - this.itensCarrinho[i].product.price.installmentValue
            }
        }

        this.itensCarrinho = arrayAux;

    }

    apagaCarrinho() {
        this.itensCarrinho = []
        this.total = 0
        this.parcial = 0
        return this.itensCarrinho, this.total, this.parcial
        
    }

}
