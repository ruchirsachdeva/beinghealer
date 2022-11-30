import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  // Pagination parameters.
  currentPage: number = 1;
  count: number = 10;
  pageSize: number;
  pageNumbers: number[] = [1,2,3];
  itemStartIndex: number;
  itemEndIndex: number;

  constructor(@Inject('pageSize')pageSize: number) {
    this.pageSize = pageSize;
    this.itemStartIndex = 0;
    this.setPageNumbers()
    this.itemEndIndex = pageSize;
  }

  ngOnInit(): void {
    this.setPageNumbers();
    this.setItemRangeIndexesForPage();
    this.goToTopOfPage();
  }

  public onClickPage(page: number) {
    this.currentPage = page;
    this.setItemRangeIndexesForPage();
    this.goToTopOfPage();
  }

  protected setItemCount(count: number) {
    this.count = count
    this.setPageNumbers()
  }

  protected counter(i: number) {
    return new Array(i);
  }

  public setPageNumbers() {
    let numberOfPages = Math.ceil(this.count/this.pageSize);
    this.pageNumbers = Array.from(new Array(numberOfPages), (x, i) => i+1)
  }

  protected setItemRangeIndexesForPage() {
    this.itemStartIndex = (this.currentPage - 1) * this.pageSize;
    this.itemEndIndex = this.currentPage * this.pageSize;
  }

  public slice(items: any[]): any[] {
    return items.slice(this.itemStartIndex, this.itemEndIndex)
  }

  protected goToTopOfPage() {
    window.scrollTo(0, 0);
  }

}
