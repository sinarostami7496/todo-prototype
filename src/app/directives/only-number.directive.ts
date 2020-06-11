import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appOnlyNumber]",
})
export class OnlyNumberDirective {
  @Input("maxValue") maxValue: number;
  @Input("minValue") minValue: number;

  constructor(private el: ElementRef) {
    el.nativeElement.style.direction = 'ltr';
  }

  @HostListener("paste", ["$event"]) onPast(event) {
    let e = <KeyboardEvent>event;
    e.preventDefault();
  }

  @HostListener("keyup", ["$event"]) onKeyPress(event) {
    let e = <KeyboardEvent>event;
    let value = Number(this.el.nativeElement.value);

    if (["Delete", "Backspace"].indexOf(e.key) !== -1) {
      if (this.el.nativeElement.value.length === 0) {
        this.el.nativeElement.value = 0;
      }
    }

    if(value >= this.maxValue) {
      this.el.nativeElement.value = this.maxValue;
    }

    if(value <= this.minValue){
      this.el.nativeElement.value = this.minValue;
    }

    if (["ArrowUp"].indexOf(e.key) !== -1) {
      if (value < this.maxValue) {
        this.el.nativeElement.value = value + 1;
      }
    }

    if (["ArrowDown"].indexOf(e.key) !== -1) {
      if (value > this.minValue) {
        this.el.nativeElement.value = value - 1;
      }
    }
  }

  @HostListener("keydown", ["$event"]) onKeyDown(event) {
    let e = <KeyboardEvent>event;
    if (
      [
        "Delete",
        "Backspace",
        "Tab",
        "Escape",
        "Enter",
        "NumLock",
        "ArrowLeft",
        "ArrowRight",
        "End",
        "Home",
        ".",
      ].indexOf(e.key) !== -1 ||
      // Allow: Ctrl+A
      (e.key === "a" && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (e.key === "c" && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+V
      (e.key === "v" && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (e.key === "x" && (e.ctrlKey || e.metaKey))
    ) {
      // let it happen, don't do anything
      return;
    }

    // Ensure that it is a number and stop the keypress
    if (
      e.shiftKey ||
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(e.key) === -1
    ) {
      e.preventDefault();
    }

    //check max value
    if (
      this.el.nativeElement.value >= this.maxValue ||
      this.el.nativeElement.value < this.minValue
    ) {
      e.preventDefault();
    }
  }
}
