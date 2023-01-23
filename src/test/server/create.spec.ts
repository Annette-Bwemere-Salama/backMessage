// import User from "src/models/User";
import User from "../../models/User"

import assert from "assert";


describe('Creating documents in MongDB', ()=>{
    it('Creating a new User', (done)=>{
        const newUser = new User({ lastName: "Annette"})
        newUser.save()
                .then(()=>{
                    assert(!newUser.isNew);
                    done()
                })
    })
})