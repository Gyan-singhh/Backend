class ApiResponse {
    constructor(statuscode, data, message = "Success"){
        this.statuscode = statuscode
        this.data = datathis.message = message
        this.success = statuscode < 400
    }
}