# -*- codeing = utf-8 -*-=
# @Tiem :2021/7/4 7:40
# @auther : lxl
# @File :main.py
# @software: PyCharm

from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}