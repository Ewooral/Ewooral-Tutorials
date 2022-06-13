import pydantic
from typing import Optional

class User(pydantic.BaseModel):
    username: str
    age: int
    score: float
    email: Optional[str] = None
    full_name: Optional[str] = None

    @pydantic.validator("username")
    @classmethod
    def username_valid(cls, value):
        try:
            if not value.isalpha():
                raise ValueError("Username must be alphabetic")
            else:
                print(value) 
            #     
            if not value.islower():
                raise ValueError("Username must be lowercase")
            return value
        except ValueError as e:
           return e



def main():
    user1 = User(username="john", age=30, score=0.9, email="boahen.cos@gmail.com")
    user2 = User(username="jane", age=25, score=0.8)
    print(user1.username)
    # print(user2.username)
    print(user1.email)

if __name__ == '__main__':
    main()