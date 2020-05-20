/*
 * The MIT License
 *
 * Copyright 2020 Juliano Maciel Ferreira.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { Component, OnInit } from "@angular/core";
import { AppService } from "../../app.service";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
HC_exporting(Highcharts);

@Component({
  selector: "mlocks-stacked-area-chart",
  templateUrl: "./stacked-area-chart.component.html",
  styleUrls: ["./stacked-area-chart.component.scss"],
})
export class StackedAreaChartComponent implements OnInit {
  public Highcharts: typeof Highcharts = Highcharts; // required
  public chartOptions: any = {
    chart: {
      type: "area",
    },
    title: {
      text: "Random Data",
    },
    subtitle: {
      text: "Dashboard",
    },
    xAxis: {
      categories: ["1750", "1800", "1850", "1900", "1950", "1999", "2050"],
      tickmarkPlacement: "on",
      title: {
        enabled: false,
      },
    },
    yAxis: {
      title: {
        text: "Billions",
      },
      labels: {
        formatter: function () {
          return this.value / 1000;
        },
      },
    },
    tooltip: {
      split: true,
      valueSuffix: " millions",
    },
    plotOptions: {
      area: {
        stacking: "normal",
        lineColor: "#666666",
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: "#666666",
        },
      },
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: true,
    },
    series: [
      {
        name: "Asia",
        data: [502, 635, 809, 947, 1402, 3634, 5268],
      },
      {
        name: "Africa",
        data: [106, 107, 111, 133, 221, 767, 1766],
      },
      {
        name: "Europe",
        data: [163, 203, 276, 408, 547, 729, 628],
      },
      {
        name: "America",
        data: [18, 31, 54, 156, 339, 818, 1201],
      },
      {
        name: "Oceania",
        data: [2, 2, 2, 6, 13, 30, 46],
      },
    ],
  }; // required

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.triggerResizeEvent();
  }
}
