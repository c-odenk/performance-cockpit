class EvaluationRecord {

    sid = 0;    // Salesman ID
    rid = 0;    // Record ID   zB "sid" + "/" + "rid"

    // #### ES MUSS EINE FUNKTIONALITÄT IMPLEMENTIERT WERDEN, DIE ALLE VERKÄUFE EINES SALESMEN HIER BERÜCKSICHTIGT

    constructor(sid, name, rid, recordYear) {
        this.sid = sid;
        this.name = name;
        this.rid = rid;
        this.recordYear = recordYear;
    }

    // #### SOCIAL PERFORMANCE OBJECTS

    leadershipCompetence = {
        targetValue: 4,
        actualValue: null,
    }

    opennesToEmployee = {
        targetValue: 4,
        actualValue: null,
    }

    socialBehaviourToEmployee = {
        targetValue: 4,
        actualValue: null,
    }

    attitudeTowardsClient = {
        targetValue: 4,
        actualValue: null,
    }

    communicationSkills = {
        targetValue: 4,
        actualValue: null,
    }

    integrityToCompany = {
        targetValue: 4,
        actualValue: null,
    }

    // #### SET METHODEN

    set leadershipCompetence(num) {
        this.integrityToCompany.actualValue = num;
    }

    set opennesToEmployee(num) {
        this.opennesToEmployee.actualValue = num;
    }

    set socialBehaviourToEmployee(num) {
        this.socialBehaviourToEmployee.actualValue = num;
    }

    set attitudeTowardsClient(num) {
        this.attitudeTowardsClient.actualValue = num;
    }

    set communicationSkills(num) {
        this.communicationSkills.actualValue = num;
    }

    set integrityToCompany(num) {
        this.integrityToCompany.actualValue = num;
    }
    

    // #### GET METHODEN

    get sid() {
        return this.sid;
    }

    get name() {
        return this.name;
    }

    get rid() {
        return this.rid;
    }

    get recordYear() {
        return this.recordYear;
    }

}

module.exports = EvaluationRecord;