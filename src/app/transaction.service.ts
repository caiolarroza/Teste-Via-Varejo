import { Injectable } from '@angular/core';

export interface ITransaction {
    type?: string,
    name?: string,
    value?: number | string
}