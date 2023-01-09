import { Component } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/components/ttk-shopping-search/model/products';
import { __values } from 'tslib';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {


  idCardValidator: ValidatorFn = (control: AbstractControl) => {

    const idCard: string | null = control.value;
    if (idCard) {
      if (idCard?.length !== 13) {
        return { idCard: true };
      }

      let index = 13;
      let sum = 0;

      for (const num of idCard.substring(0, 12)) {
        if (isNaN(Number(num))) {
          return { idCard: true };
        }
        sum += Number(num) * index--;
      }
      const mod = sum % 11;
      const checkLastNumber = 11 - mod;

      let strLastNumber = String(checkLastNumber).slice(-1);
      let strIdCard = String(idCard.charAt(12));

      if (strIdCard !== strLastNumber) {
        return { idCard: true };
      }

      //console.log(sum);
      //console.log(mod);
      //console.log('11-' + mod + ' = ' + checkLastNumber);

    }
    return null;

  }


  idCard = new FormControl(null, [
    Validators.required,
    this.idCardValidator,
  ]);




  products: Product[] = [
    { name: 'Apple', image: 'https://cdn.pixabay.com/photo/2017/09/26/13/31/apple-2788616_960_720.jpg', description: 'An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus', price: 40, },
    { name: 'Oranges', image: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_960_720.jpg', description: 'The fruit is a modified berry known as a hesperidium, and the flesh is divided into segments called carpels', price: 42, },
    { name: 'Grapefruits', image: 'https://cdn.pixabay.com/photo/2016/09/05/20/52/grapefruit-1647688_960_720.jpg', description: 'The grapefruit (Citrus x paradisi) is a subtropical citrus tree known for its relatively large, sour to semi-sweet, somewhat bitter fruit.', price: 45, },
    { name: 'Nectarines', image: 'https://cdn.pixabay.com/photo/2018/04/12/20/16/peach-3314679_960_720.jpg', description: 'Smooth-skinned peach of the rose family (Rosaceae) that is grown throughout the warmer temperate regions of both the Northern and Southern hemispheres.', price: 48, },
    { name: 'Apricots', image: 'https://cdn.pixabay.com/photo/2017/07/20/18/40/apricots-2523272_960_720.jpg', description: 'An apricot is a fruit, or the tree that bears the fruit, of several species in the genus.', price: 50, },
    { name: 'Peaches ', image: 'https://cdn.pixabay.com/photo/2017/08/11/17/41/peach-2632182_960_720.jpg', description: 'It belongs to the genus Prunus, which includes the cherry, apricot, almond, and plum, in the rose family.', price: 52, },
    { name: 'Plums', image: 'https://cdn.pixabay.com/photo/2018/08/30/10/21/plums-3641830_960_720.jpg', description: 'A plum is a fruit of some species in Prunus subg. Prunus. Dried plums are called prunes. African Rose plums (Japanese or Chinese plum)', price: 52, },
    { name: 'Strawberries', image: 'https://cdn.pixabay.com/photo/2018/01/17/22/24/strawberries-3089148_960_720.jpg', description: 'strawberry, (genus Fragaria), genus of more than 20 species of flowering plants in the rose family (Rosaceae) and their edible fruit.', price: 54, },
    { name: 'Raspberries', image: 'https://cdn.pixabay.com/photo/2018/11/08/22/05/raspberry-3803414_960_720.jpg', description: 'The raspberry is the edible fruit of a multitude of plant species in the genus Rubus of the rose family, most of which are in the subgenus Idaeobatus.', price: 58, },
    { name: 'Watermelons', image: 'https://cdn.pixabay.com/photo/2015/06/19/16/48/watermelon-815072_960_720.jpg', description: 'The watermelon is an annual that has a prostrate or climbing habit. Stems are up to 3 metres (10 feet) long and new growth has yellow or brown hairs. ', price: 72, },
  ];

  filteredProducts: Product[] = this.products;

  searhProduct(text: string): void {
    this.filteredProducts = this.products.filter(products => {
      const productName = products.name.toLowerCase();
      const serachName = text.toLowerCase();
      return productName.indexOf(serachName) !== -1;
    });
  }


  totalProduct = this.products.length;





  // currentPage = 1;
  // itemsPerPage = 6;
  // totalPages: Number | undefined;

  // xx() {
  //   this.products.length;
  // }

  //console.log('this.currentPage');
  //this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);





}
