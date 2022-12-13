import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDropdownClickInside]'
})
export class DropdownClickInsideDirective {

  constructor(private elementRef: ElementRef ) { document.addEventListener('click', function(event:any){

    //console.log(event.target.closest('#dropdown_detail'));
    //console.log(elementRef.nativeElement.classList.contains('show'));

    const
      is_show = elementRef.nativeElement.classList.contains("show"),
      is_current = event.target.closest('#dropdown_detail');


    if(!is_show && is_current)
    {
      is_current.classList.add("show");
    }


  }) }


}
